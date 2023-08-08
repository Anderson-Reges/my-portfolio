'use client'

import ICard from "@/interfaces/Card";
import IProjectDetails from "@/interfaces/ProjectDetails";
import { Octokit } from "@octokit/core";
import Image from "next/image";
import { BiTime } from 'react-icons/bi'
import React from 'react';
import { Tooltip } from 'flowbite-react';
import { DetailsContext } from "@/context/ProjectDetails.context";

const Card: React.FC<ICard> = ({thumb, name, stacks}) => {
  const [projectDetails, setProjectDetails] = React.useState<IProjectDetails>({} as IProjectDetails);
  const { repo, setRepo } = React.useContext(DetailsContext);

  const getProjectDetails = async () => {
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
      url: data.url
    })
  }

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
      <div className="flex w-[5em] items-center">
        <Image
          src={thumb}
          alt="sea_dot_image"
        />
      </div>
      <div className="flex flex-col gap-[.5em]">
        <h1>{projectDetails.name}</h1>
        <p className="text-xs">{(projectDetails.size / 1024).toFixed(2) + "MB"}</p>
        <div className="flex gap-1">
          <Tooltip content="Last Updates" className="text-second bg-primary px-1 transition border">
            <BiTime />
          </Tooltip>
          <p>{projectDetails.updated_at}</p>
        </div>
        <div className="inline-grid grid-cols-3 gap-[0.5em]">
          {projectDetails.topics && projectDetails.topics.map((stack) => (
            <p className="bg-[#27aa7a] text-xs w-[5em] text-center rounded">{stack}</p>
          ))}
        </div>
        <button>➜ details</button>
      </div>
    </div>
  );
}

export default Card;