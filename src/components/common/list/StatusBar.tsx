import React from 'react'
import './style.scss'

interface IProps {
  count: number
}

export default function StatusBar(props: IProps) {
  const { count } = props;
  return (
    <div className="status-bar">
      <p>
        <span className="status-bar-count">{count}</span>
        Notes in progress
      </p>
    </div>
  )
}

