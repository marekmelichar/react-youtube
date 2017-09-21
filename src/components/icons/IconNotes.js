import React from 'react';

const IconNotes = (props) => {
  const fill = props.fill || 'blue'

  return (
    <svg className="notes-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-labelledby="title">
      <title id="title">Notes</title>
      <path fill={fill} d="M21 4v-1h1v1h1.003c1.107 0 1.997 0.897 1.997 2.004v20.993c0 1.114-0.894 2.004-1.997 2.004h-15.005c-1.107 0-1.997-0.897-1.997-2.004v-20.993c0-1.114 0.894-2.004 1.997-2.004h1.003v-1h1v1h3v-1h1v1h3v-1h1v1h3zM21 5h-3v1h-1v-1h-3v1h-1v-1h-3v1h-1v-1h-1c-0.552 0-1 0.439-1 1.003v20.994c0 0.554 0.455 1.003 1 1.003h15c0.552 0 1-0.439 1-1.003v-20.994c0-0.554-0.455-1.003-1-1.003h-1v1h-1v-1zM9 9v1h13v-1h-13zM9 12v1h13v-1h-13zM9 15v1h13v-1h-13zM9 18v1h13v-1h-13zM9 21v1h13v-1h-13zM9 24v1h13v-1h-13z"></path>
    </svg>
  )
}

export default IconNotes;