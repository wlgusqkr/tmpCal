
interface PostProps {
  title?: string
  onClick?: () => void
  subTitle?: string
  icon?: JSX.Element
}

// const tmpTag =
//   <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M4.25 2.83334H7.08333V31.1667H4.25V2.83334ZM26.9167 2.83334H8.5V31.1667H26.9167C28.4792 31.1667 29.75 29.8959 29.75 28.3333V5.66667C29.75 4.10409 28.4792 2.83334 26.9167 2.83334ZM25.5 17H12.75V14.1667H25.5V17ZM25.5 11.3333H12.75V8.5H25.5V11.3333Z" fill="black" />
//   </svg>

const Post = ({ title, onClick, subTitle, icon}: PostProps) => {
  return (
    <div className="w-[294px] h-[90px] pl-10 py-5 bg-white rounded-xl shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] border border-[#8e8e93] justify-start items-center gap-8 flex overflow-hidden "
      onClick={onClick}>
      <div className="relative  overflow-hidden w-[34px] h-[34px]">
        {icon}
      </div>
      <div className="flex-col justify-center items-start gap-1 inline-flex">
        <div className="text-black text-[22px] font-bold font-['SF Pro'] leading-7">{title}</div>
        <div className="text-[#8e8e93] text-[13px] font-normal font-['SF Pro'] leading-[18px]">{subTitle}</div>
      </div>
    </div>
  )
};

export default Post;
