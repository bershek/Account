import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from "styled-components/macro";
import { Button } from 'app/components/Button';
import { useSelector } from 'react-redux';
import { ILecture } from '@utils/coursesData';
import { getCourseComments } from '../../slice/selectors';

interface RowProps {
  row: ILecture,
  finished: boolean,
  title: string,
  handlePassLectures(data): void
  handleSetComment(data): void
}

const Row = ({handlePassLectures, row, finished, title, handleSetComment}: RowProps): JSX.Element => {
  const commentRef = useRef<HTMLInputElement>(null);
  const comment = useSelector(getCourseComments);
  const check = useMemo(() => Object.keys(comment).find((el) => (el === row.id)), [row.id]);
  const [value, setValue] = useState<string>('');
  const [editable, setEditable] = useState<boolean>(false);

  const handleCommentButton = () => {
    if (editable) {
      handleSetComment({name: row.id, value});
      setEditable(false);
    } else {
      setEditable(true);
    }
  };

  useEffect(() => {
    if (editable) commentRef?.current?.focus();
  }, [editable]);

  useEffect(()=> {
    if (check === row.id) setValue(comment[row.id]);
  }, []);

  const renderCommentBlock = useMemo((): JSX.Element => (
    <CommentWrapper>
      {
        editable
          ? <input
            type="text"
            value={value}
            ref={commentRef}
            onChange={(e) => setValue(e.target.value)}
          />
          :  <div>{value}</div>
      }
      {!finished
        && <Button
          label={editable ? "Save" : value ? "Edit" : "Add"}
          onClick={handleCommentButton}
        />
      }
    </CommentWrapper>
  ), [value, editable, finished]);

  return(
    <RowWrapper key={row.id}>
      <td><input type="checkbox" id={row.id} checked={finished} /></td>
      <td>{row.title}</td>
      <td>{row.lectures}</td>
      <td>{row.time}</td>
      <td>
        {renderCommentBlock}
      </td>
      <td>
        {!finished
          && <Button label="Finish" onClick={handlePassLectures.bind(null, {name:title, value: row.title})} />}
      </td>
    </RowWrapper>
  )
};

const RowWrapper = styled.tr`
  height: 2.5rem;
  text-align: left;
  color: ${p => p.theme.text};
`;

const CommentWrapper = styled.tr`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  column-gap: 1.25rem;
  color: ${p => p.theme.text};
`;

export default Row;