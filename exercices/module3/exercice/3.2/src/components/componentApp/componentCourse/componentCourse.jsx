import Header from "components/componentHeader/Header";
import Content from "components/ComponentContent/Content";

const Course = ({ course }) => {
  const { name: courseName, parts: courseParts } = course;

  return (
    <div>
      <Header course={courseName} />
      <Content parts={courseParts} />
    </div>
  );
};

export default Course;
