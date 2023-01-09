import classNames from 'classnames';

interface CalloutProps {
  children?: React.ReactNode;
  type?: 'default' | 'warning' | 'danger';
}

export function Callout({
  children,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div
      className={classNames(
        'my-6 flex items-center rounded-md border border-l-4 p-4',
        {
          'border-zinc-900 bg-zinc-50 bg-opacity-50 text-zinc-900 dark:border-zinc-200 dark:bg-zinc-700 dark:text-zinc-50':
            type === 'default',
          'border-red-900 bg-red-50 bg-opacity-50 text-red-900':
            type === 'danger',
          'border-yellow-900 bg-yellow-50 bg-opacity-50 text-yellow-900':
            type === 'warning',
        },
      )}
      {...props}
    >
      {type === 'default' && <span className="mr-4">ℹ️</span>}
      {type === 'danger' && <span className="mr-4">⛔</span>}
      {type === 'warning' && <span className="mr-4">🚧</span>}
      <div>{children}</div>
    </div>
  );
}
