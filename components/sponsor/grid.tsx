import React from 'react'

export function Grid({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-2 items-center print:mx-auto">
      {children}
    </div>
  )
}
