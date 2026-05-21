function ArrayObject() {
  const array = ["Apple", "Banana", "Mango"];
  const objects = [
    {
      name: "Priyansh",
      last: "Jadav",
      age: 20,
      enroll: 80,
    },
    {
      name: "Adi",
      last: "M",
      age: 19,
      enroll: 83,
    },
    {
      name: "Arya",
      last: "Stark",
      age: 21,
      enroll: 32,
    },
  ];
  const fullName = (objects) => {
    return objects.name + " " + objects.last;
  };
  return (
    <>
      <div>
        <h1>This is an Array</h1>
        <ul>
          {array.map((arr, index) => (
            <li>
              {index} - {arr}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1>This is an Object</h1>
        <p>Full Name: {fullName(objects)}</p>
        <p>First Name: {objects.name}</p>
        <p>Last Name: {objects.last}</p>
        <p>Age: {objects.age}</p>
        <p>Enroll: {objects.enroll}</p>
      </div>
      <div>
        <ul>
          {objects.map((object, index) => {
            return (
              <li key={index}>
                {fullName(object)} is {object.age} old
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default ArrayObject;
