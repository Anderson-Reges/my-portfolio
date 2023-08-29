'use client'

import ICard from "@/interfaces/Card";
import IProjectDetails from "@/interfaces/ProjectDetails";
import { Octokit } from "@octokit/core";
import { BiTime, BiLink } from 'react-icons/bi'
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
      repo_url: data.html_url,
      deploy_url: data.homepage
    })
  };

  React.useEffect(() => {
    getProjectDetails();
  }, [])

  return (
    <div 
      className="
      flex gap-[1em] border px-[1em] py-[1em] w-[19em]
      rounded-lg desktop:hover:scale-105 transition desktop:hover:border-third
      h-[200px] mobile:w-full"
    >
      <div className="flex flex-col gap-[.5em] w-full">
        <div className="flex justify-between">
          <div className="flex flex-col gap-[.5em]">
            <h1>{projectDetails.name}</h1>
            <p className="text-xs">{(projectDetails.size / 1024).toFixed(2) + "MB"}</p>
          </div>
          <div className="flex items-center">
            <Link href={`${projectDetails.repo_url}`}>
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
        {
          projectDetails.deploy_url && (
            <div className="flex items-center gap-2">
              <BiLink size="28px" />
              <p className="text-second text-sm underline">
                <Link href={`${projectDetails.deploy_url}`} className="hover:text-blue-600">
                  {projectDetails.deploy_url}
                </Link>
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Card;