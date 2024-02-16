export const Toolbox = () => {
  return (
    <div className="w-full h-full  absolute left-0  flex justify-center items-end pb-4 z-50">
      <div
        className="p-4 bg-white"
        draggable
        onDrag={(event) => event.stopPropagation()}
        onClick={() => {
          alert(123);
        }}
      >
        <h1>arrastar</h1>
      </div>
    </div>
  );
};
