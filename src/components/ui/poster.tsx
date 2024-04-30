import { cn } from "@/lib/utils"

export const Poster = ({
  title,
  description,
  children,
  className,
  src,
  ...props
}: {
  title?: string,
  description?: string,
  children?: React.ReactNode
  className?: string
  src?: string
}) => {
  const defaultSrc = '/poster.png'

  return <div
    {...props}
    className={cn("px-4 py-4 flex items-end justify-stretch rounded-lg text-white whitespace-pre-wrap", className)}
    style={{ background: src ? `url(${src})` : "linear-gradient(0deg, #DB4E66, #A24688 40%, #4E3ABA)" }}
    // style={{ background: `url(${defaultSrc})` }}
  >
    <div className="pt-12">
      {/* <div className="mb-4 mt-2 rounded-full inline-block w-6 h-6 bg-white" /> */}
      <div>
        {title && <h2 className="text-lg font-semibold mb-1">{title}</h2>}
        {description && <p className="text-sm">{description}</p>}
        {children}
      </div>
    </div>
  </div>
}