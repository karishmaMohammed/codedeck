import React from 'react'
import { BiExport } from 'react-icons/bi'
function OutputConsole({ currentOutput }) {
  return (
    <div className='flex flex-col'>
      <div className='bg-[#ededed] p-4 flex justify-between'>
        <h3 className='font-bold'>Output :</h3>
        <a className='flex font-semibold gap-4'
          href={`data:text/plain;charset=utf-8,${encodeURIComponent(currentOutput)}`} download="output.txt">
          <BiExport className='text-2xl' /> Export Output
        </a>
      </div>
      <textarea
      className='h-[calc(50vh_-_8rem)] resize-none'
      value={currentOutput}
      disabled
      />
    </div>
  )
}

export default OutputConsole