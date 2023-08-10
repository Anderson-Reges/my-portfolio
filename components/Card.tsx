'use client'

import ICard from "@/interfaces/Card";
import IProjectDetails from "@/interfaces/ProjectDetails";
import { Octokit } from "@octokit/core";
import { BiTime } from 'react-icons/bi'
import React from 'react';
import Link from "next/link";
import { Tooltip } from 'flowbite-react';
import { FaGithub } from 'react-icons/fa';

const Card: React.FC<ICard> = ({ name }) => {
  const [projectDetails, setProjectDetails] = React.useState<IProjectDetails>({} as IProjectDetails);

  const getProjectDetails = async (): Promise<void> => {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    const { data } = await octokit.request('GET /repos/{owner}/{repo}', {
      owner: 'Anderson-Reges',
      repo: `${name}`,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })

    const updatedDate = new Date(data.updated_at);
    const createdDate = new Date(data.created_at);

    setProjectDetails({
      name: data.name,
      size: data.size,
      topics: data.topics,
      updated_at: `${updatedDate.getMonth()}/${updatedDate.getDay()}/${updatedDate.getFullYear()}`,
      created_at: `${createdDate.getMonth()}/${createdDate.getDay()}/${createdDate.getFullYear()}`,
      url: data.html_url
    })
  };

  React.useEffect(() => {
    getProjectDetails();
  }, [])

  return (
    <div 
      className="
      flex gap-[1em] border px-[1em] py-[1em] w-[19em]
      rounded-lg hover:scale-105 transition hover:border-third
      h-[200px]"
    >
      <div className="flex flex-col gap-[.5em] w-full">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[.5em]">
            <h1>{projectDetails.name}</h1>
            <p className="text-xs">{(projectDetails.size / 1024).toFixed(2) + "MB"}</p>
          </div>
          <div className="flex items-center">
            <Link href={`${projectDetails.url}`}>
              <FaGithub className='transition text-second hover:text-third hover:scale-110' size="32px" />
            </Link>
          </div>
        </div>
        <div className="flex gap-1">
          <Tooltip content="Last Updates" className="text-second bg-primary px-1 transition border">
            <BiTime />
          </Tooltip>
          <p>{projectDetails.updated_at}</p>
        </div>
        <div className="inline-grid grid-cols-4 gap-[0.5em]">
          {projectDetails.topics && projectDetails.topics.map((stack) => (
            <p className="bg-[#27aa7a] text-xs w-[5em] text-center rounded">{stack}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;