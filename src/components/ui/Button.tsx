import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'ghost-light'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string
  external?: boolean
  onClick?: never
  type?: never
  disabled?: never
}

interface ButtonActionProps extends ButtonBaseProps {
  href?: never
  external?: never
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

type ButtonProps = ButtonLinkProps | ButtonActionProps

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-forest-600 text-white hover:bg-forest-700 active:bg-forest-800',
  secondary:
    'border border-sand-900 text-sand-900 hover:bg-sand-900 hover:text-white',
  ghost:
    'border border-sand-400 text-sand-700 hover:border-sand-700 hover:text-sand-900',
  'ghost-light':
    'border border-white/40 text-white hover:bg-white hover:text-sand-900',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2'

  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if ('href' in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={('type' in props && props.type) || 'button'}
      onClick={'onClick' in props ? props.onClick : undefined}
      disabled={'disabled' in props ? props.disabled : false}
      className={classes}
    >
      {children}
    </button>
  )
}
