import PropTypes from 'prop-types'
import Location from './location'


export default function Search({onChange}) {
  return (
<div className='mt-4 w-[80%] mx-[10%] xsm:mx-0 xsm:w-full md:w-[114%] lg:w-[113%]  md:z-10'>
        <div className="relative  w-[100%]">
          <input
            type="text"
            onChange={onChange}
            placeholder="Search by location..."
            className="bg-white text-xs xsm:text-base h-14 md:h-12 xl:h-12 pl-8 p-2
           focus:outline-none
           text-gray-500 rounded-md w-full"
          />
          <Location className="absolute left-1 md:left-2 top-3 md:top-2 h-7 md:h-6 "  />
          <button className='bg-nav_purple text-gray-100/80 p-0 font-bold text-[.6rem] xsm:text-xs absolute right-2 xsm:p-1 text-center h-9 md:h-8 w-12 xsm:w-28 rounded top-[25%] xsm:top-[17%]'>Search</button>
        </div>
</div>
  );
}

Search.propTypes={
    onChange : PropTypes.func,
}
