import { GripVertical, Trash2 } from "lucide-react";
import { useDrag, useDrop } from "react-dnd";


export type ItineraryItem = {
  id: number;
  day: number;
  time: string;
  title: string;
  price: number;
  hours: string;
  category: string;
  image: string;
};

const DraggableItineraryItem = ({
  item, 
  index, 
  canEdit = true,
  moveItem, 
  onDelete, 
  onDayChange, 
  onTimeChange,
  onImageClick,
} : {
  item: ItineraryItem; 
  index: number; 
  canEdit: boolean;
  moveItem: (fromIndex: number, toIndex: number) => void;
  onDelete: (id: number) => void;
  onDayChange: (id: number, day: number) => void;
  onTimeChange: (id: number, time: string) => void;
  onImageClick: (item: ItineraryItem) => void;
}) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'ITINERARY_ITEM',
    item: { index },
    canDrag: () => canEdit,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'ITINERARY_ITEM',
    hover: (draggedItem: { index: number }) => {
      if (!canEdit) return;
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => { if (node) { preview(drop(node)); } }}
      className={`grid grid-cols-14 gap-2 items-center py-3 px-3 rounded-lg hover:bg-gray-50 transition-colors ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      {/* 드래그 핸들 */}
      <div ref={(node) => { if (node) { drag(node); } }} className={`w-8 col-span-1 flex justify-center ${canEdit ? "cursor-move" : "cursor-not-allowed opacity-40"}`}>
        <GripVertical className="w-5 h-5 text-gray-400" />
      </div>

      {/* 일차 */}
      {/* 20260126 김민호: w 줄임. h 대신 py로 대체 -> 크기 줄임 */}
      <div className="col-span-1">
        <input
          type="number"
          value={item.day}
          onChange={(e) => onDayChange(item.id, parseInt(e.target.value) || 1)}
          disabled={!canEdit}
          min="1"
          className="w-10 py-2 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent font-semibold text-gray-700 text-sm"
        />
      </div>

      {/* 시간 */}
      {/* 20260125 김민호: 시간은 24시간 체제로 변경 불가. 이는 OS에 따라 다름. 단, 시간 필드의 row를 100 이상으로 두면 해결됨. */}
      <div className="col-span-3">
        <input
          type="time"
          value={item.time}
          onChange={(e) => onTimeChange(item.id, e.target.value)}
          disabled={!canEdit}
          className="w-100 px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
        />
      </div>

      {/* 사진 */}
      <div className="col-span-3">
        <img
          src={item.image}
          alt={item.title}
          onClick={() => onImageClick(item)}
          className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
        />
      </div>

      {/* 관광지 정보 */}
      <div className="col-span-5 space-y-1">
        <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
        <p className="text-xs text-orange-600">{item.price === 0 ? '무료' : `${item.price.toLocaleString()}원`}</p>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>● {item.hours}</span>
          <span>● {item.category}</span>
        </div>
      </div>

      {/* 삭제 */}
      <div className="col-span-1 flex justify-center">
        <button 
          onClick={() => canEdit && onDelete(item.id)}
          disabled={!canEdit} 
          className="w-8 h-8 flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
          title="삭제"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
export default DraggableItineraryItem;