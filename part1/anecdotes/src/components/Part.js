

const Part = ({anecdotes,points})=>{
  const anecdote=Math.max(...anecdotes);
  const index=points.indexOf(Math.max(...anecdotes));
  console.log(anecdote,index)
    return (
      <>
        <p>{anecdote}</p>
        <p>has {index} votes</p>
        </>
    )
  }

  export default Part;
