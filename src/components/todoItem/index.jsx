import { FaRegCircle } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
const TodoItem = ({ todo }) => {
  return (
    <div className="flex items-center gap-2 px-2 py-4 pb-4 border-b cursor-pointer">
      <FaRegCircle className="text-[#C6E7FF] size-4" />
      <p className="flex-1">{todo.text}</p>
      <RiDeleteBin5Fill className="text-[#CC2B52] size-4 hover:scale-110 transition-all" />
    </div>
  );
};

export default TodoItem;
