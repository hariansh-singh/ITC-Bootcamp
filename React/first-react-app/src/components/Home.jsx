import React from "react";

const Home = () => {
  const name = "Hariansh Singh";
  const courses = ["A", "B", "C"];

  return (
    <>
      <h3>{name}</h3>
      <div>
        {courses.length > 0 ? (
          <>
            <h1>Courses: </h1>
            <ul>
              {courses.map((val, ind) => (
                <li key={ind}>{val}</li>
              ))}
            </ul>
          </>
        ) : (
          <h3>No course found!</h3>
        )}
      </div>
    </>
  );
};

export default Home;
