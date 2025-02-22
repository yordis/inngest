export function IconStatusCircleCheck({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title}</title>
      <g>
        <path
          d="M15 26C21.0751 26 26 21.0751 26 15C26 8.92487 21.0751 4 15 4C8.92487 4 4 8.92487 4 15C4 21.0751 8.92487 26 15 26Z"
          fill="#14B8A6"
        />
        <g>
          <path
            d="M19.4392 13.0157C19.7401 12.7041 19.7315 12.2076 19.4199 11.9067C19.1083 11.6058 18.6118 11.6144 18.3109 11.926L13.4076 17.0041L11.6707 15.3263C11.3591 15.0254 10.8626 15.034 10.5617 15.3456C10.2608 15.6572 10.2694 16.1537 10.581 16.4546L12.8821 18.6767C13.1937 18.9776 13.6902 18.969 13.9911 18.6574L19.4392 13.0157Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
}
