import { Button, Card, TextInput, Avatar } from "flowbite-react";
import { useState } from "react";

export default function Login() {
<<<<<<< HEAD
  return (
    <center style={{ marginTop: "100px" }}>
=======
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const onChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
  }
  return (<>
    <center style={{ marginTop: "250px" }}>
>>>>>>> 29850175a7e6a1d7f9bbc9f2c35aa2087260a89c
      <Card className="max-w-md">
        <Avatar img="/user.png" rounded size="xl" />
        <h3 className="text-center text-xl mb-4 mt-4">Welcome to Chit-Chat</h3>
        <form className="flex flex-col gap-4">
          <div>
            <TextInput id="email" placeholder="Email" required type="email" onChange={onChange} />
          </div>
          <div>
            <TextInput
              id="password"
              required
              type="password"
              placeholder="Password"
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </center>
  </>
  );
}
