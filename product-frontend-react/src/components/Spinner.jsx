import React from 'react';

export default function Spinner() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="h-8 w-8 border-4 border-sky-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}



