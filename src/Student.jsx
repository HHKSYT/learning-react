function Student(props) {
  return (
    <>
      <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>IS student: {props.isstudent ? "Yes" : "No"}</p>
      </div>
    </>
  );
}

export default Student;
