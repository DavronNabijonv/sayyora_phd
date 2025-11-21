import React from 'react';

interface TaskCardProps {
  title: string;
  subtitle: string;
  description: string;
  hours: number;
  imageUrl: string;
  link: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  subtitle,
  description,
  hours,
}) => {
  return (
    <div className="bg-white border-t py-4 flex flex-col sm:flex-row items-start gap-4 w-full">
      <div className="flex-1 flex flex-col items-start h-full justify-between gap-2">
        <div className="flex justify-between items-center max-sm:w-full">
          <h3 data-access-size className="text-lg font-medium text-gray-800">
            {title}
          </h3>
          <div
            data-access-size
            className="text-violet-800 text-xl font-bold sm:hidden"
          >
            {hours}
          </div>
        </div>
        <p
          data-access-size
          className="text-xs text-gray-600 uppercase font-medium "
        >
          {subtitle}
        </p>
        <p data-access-size className="text-xs text-gray-700">
          {description}
        </p>
      </div>
      <div
        data-access-size
        className="text-violet-800 text-xl font-bold max-sm:hidden"
      >
        {hours}
      </div>
    </div>
  );
};

export default TaskCard;
