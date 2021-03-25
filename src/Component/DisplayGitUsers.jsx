import React, { Fragment } from "react";
const DisplayGitUsers = props => {
  let { users, repos, loading } = props;
  console.log(repos);
  return (
    <Fragment>
      <section className="card">
        {loading === true ? (
          <article className="row">
            <div className="col-md-3">
              <img src={users.avatar_url} alt={users.name} />
              <div style={{ textAlign: "left", padding: "4px 10px" }}>
                {users.bio}
                <span className="badge badge-primary float-right">
                  {users.hireable === true ? "hireable" : "learner"}
                </span>
              </div>
            </div>
            <div className="col-md-9">
              <ul className="list-group">
                <li className="list-group-item">{users.login}</li>
                <li className="list-group-item"> {users.location}</li>
                <li className="list-group-item">{users.company}</li>
                <li className="list-group-item"><a href={users.html_url} target="_blank">More details</a></li>
              </ul>
            </div>
            <h3 className="custom3">Popular Repository</h3>
            <article className="container mapBlock">
              <hr />
              {loading
                ? repos.data.map(repo => (
                    <div key={repo.id}>
                      <h3>{repo.name}</h3>
                      <a className="badge badge-success  custom_link" href={repo.html_url} target="_blank" rel="noreferrer">Download</a>
                      <ul>
                        <li>Description: {repo.description}</li>
                        <li>Created At : {repo.created_at}</li>
                        <li>Clone Repo <a href={repo.clone_url}>clone</a></li>
                        <li>Language :{repo.language}</li>
                      </ul>
                    </div>
                  ))
                : "no repos"}
            </article>
          </article>
        ) : (
          "loading..."
        )}
      </section>
    </Fragment>
  );
};

export default DisplayGitUsers;