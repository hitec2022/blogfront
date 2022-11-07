import { useKeycloak } from '@react-keycloak/web'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { editBoard } from './boardSlice'

export const EditBoardForm = () => {
  const board = useSelector((state) => state.board.currentBoard);

  const [title, setTitle] = useState(board.title)
  const [content, setContent] = useState(board.content)

  const dispatch = useDispatch()
  const navi = useNavigate()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const { keycloak } = useKeycloak();

  const onSaveClicked = () => {
    if (title && content) {
      dispatch(editBoard({ id: board.id , title, content, token: keycloak.token}))
      navi(`/board/${board.id}`)
    }
  }

  return (
    <section>
      <h2>게시판 수정</h2>
      <form>
        <label htmlFor="title">제목:</label>
        <input type="text" id="title" name="title" value={title} onChange={onTitleChanged} />
        <label htmlFor="content">내용:</label>
        <textarea id="content" name="content" value={content} onChange={onContentChanged} />
      </form>
      <button type="button" onClick={onSaveClicked}> 수정 </button>
    </section>
  )
}
