function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
    
  return (
    <div className="inline-grid w-70 h-32 m-7 bg-white text-black p-4 rounded-lg shadow-[9px_9px_12px_6px_rgba(250,_243,_9,_0.64)]">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="cursor-pointer px-10" onClick={handleClick} >&#128465;</button>
    </div>
  );
}

export default Note;
