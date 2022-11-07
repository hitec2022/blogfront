import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { fetchBoard } from './boardSlice'

export const BoardPage = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();

  const board = useSelector((state) => state.board.currentBoard);

  useEffect(() => {
    dispatch(fetchBoard(id));
  }, [dispatch, id])


  if (!board) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="board">
        <h2>제목 : {board.title}</h2>
        <p className="content">글 : {board.content}</p>
        <Link to={`/editboard/${board.id}`} className="button"> 수정 </Link>
      </article>
    </section>
  )
}
