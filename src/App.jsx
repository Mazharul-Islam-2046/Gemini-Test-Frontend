import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();


  const getUserQuery = async (userInput) => {
    // Send a POST request with the user's input, and log the response.
    const message = userInput.message
    const response = await fetch('http://localhost:5000/api/gemini-ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: message }),
    });

    console.log(message)

    const data = await response.json();
    console.log('AI response:', data.reply);
  };

  return (
    <>
      <form onSubmit={handleSubmit(getUserQuery)}>
        <input type="text" {...register('message')}/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
