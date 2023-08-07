'use client'

import ICard from "@/interfaces/Card";
import IProjectDetails from "@/interfaces/ProjectDetails";
import { Octokit } from "@octokit/core";
import React from 'react';

const Card: React.FC<ICard> = ({thumb, name, stacks}) => {
  const [projectDetails, setProjectDetails] = React.useState<IProjectDetails>({} as IProjectDetails);

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
    <div>
      <div>thumb</div>
      <div>
        <h1>{projectDetails.name}</h1>
        <p>{projectDetails.updated_at}</p>
      </div>
    </div>
  );
}

export default Card;