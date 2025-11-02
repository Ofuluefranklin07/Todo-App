
export default function Tailexe (){
return (
  <>
    <div className="flex justify-evenly items-center h-30 bg-gradient-to-br from-blue-500 to-green-400  gap-4">
      <div className="bg-blue-400 p-4 text-white ">Box 1</div>
      <div className="bg-blue-400 p-4 text-white">Box 2</div>
    </div>

    <div className="hover-scale-105 hover:rotate-1 transition duration-300 h-32 bg-gradient-to-bl from-blue-400 to-green-400"><p>
        Scrollable content here</p>
        <button className="shadow-md bg-red-400">Medium shadow</button></div>
  </>
);
}