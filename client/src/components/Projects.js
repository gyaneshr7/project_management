import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";

export default function Projects() {

    const { loading, error, data } = useQuery(GET_PROJECTS)

    if (loading) return <Spinner />
    if (error) return <p>Something went wrong</p>

    return <>
        {data.projects.length > 0 ? (<div className="row mt-5">
           {data.projects.map((project) => (
              <ProjectCard key={project.id} project={project}/>
           ))}
        </div>) :
            (<p>No projects to display</p>)
        }
    </>
}