"use client";
import React, { ReactEventHandler, useReducer } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "../Button";
import { useGlobalState } from "@/context";
import { add } from "@/utils";
import { formReducer } from "@/reducers";
import { ActionFormReducerNames } from "@/types";
import toast from "react-hot-toast";

const FORM_INITIAL_STATE = {
  title: "",
  description: "",
  date: "",
  completed: false,
  important: false,
};

export const CreateTask: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, FORM_INITIAL_STATE);
  const theme = useGlobalState();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    switch (e.target?.name) {
      case "title":
        dispatch({
          type: ActionFormReducerNames.SET_TITLE,
          payload: e.target.value,
        });
        break;
      case "description":
        dispatch({
          type: ActionFormReducerNames.SET_DESCRIPTION,
          payload: e.target.value,
        });
        break;
      case "date":
        dispatch({
          type: ActionFormReducerNames.SET_DATE,
          payload: e.target.value,
        });
        break;
      case "completed":
        dispatch({
          type: ActionFormReducerNames.SET_COMPLETED,
          payload: (e.target as HTMLInputElement).checked,
        });
        break;
      case "important":
        dispatch({
          type: ActionFormReducerNames.SET_IMPORTANT,
          payload: (e.target as HTMLInputElement).checked,
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = state;

    try {
      const res = await axios.post("/api/tasks", newTask);

      console.log(res);
      if (res.data.error) {
        toast.error(res.data.error);
        return;
      }
      toast.success("Task created successfully.");
    } catch (err) {
      console.log(`Error in CreateTask.tsx: ${err}`);
      toast.error("Something went wrong, please try again.");
    }
  };
  return (
    <CreateContentStyled
      onSubmit={handleSubmit}
      theme={theme}
    >
      <h1>Create a Task</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={state.title}
          name="title"
          onChange={handleChange}
          placeholder="e.g, Watch a video from Fireship."
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          value={state.description}
          onChange={handleChange}
          name="description"
          id="description"
          rows={4}
          placeholder="e.g, Watch a video about Next.js Auth"
        ></textarea>
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input
          value={state.date}
          onChange={handleChange}
          type="date"
          name="date"
          id="date"
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="completed">Toggle Completed</label>
        <input
          value={state.completed.toString()}
          onChange={handleChange}
          type="checkbox"
          name="completed"
          id="completed"
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="important">Toggle Important</label>
        <input
          value={state.important.toString()}
          onChange={handleChange}
          type="checkbox"
          name="important"
          id="important"
        />
      </div>

      <div className="submit-btn flex justify-end">
        <Button
          type="submit"
          name="Create Task"
          icon={add}
          padding={"0.8rem 2rem"}
          borderRad={"0.8rem"}
          fw={"500"}
          fs={"1.2rem"}
          background={"rgb(0, 163, 255)"}
        />
      </div>
    </CreateContentStyled>
  );
};

const CreateContentStyled = styled.form`
  > h1 {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
  }

  color: ${(props) => props.theme.colorGrey1};

  .input-control {
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    @media screen and (max-width: 450px) {
      margin: 1rem 0;
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: ${(props) => props.theme.colorGrey3};
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;

      resize: none;
      background-color: ${(props) => props.theme.colorGreyDark};
      color: ${(props) => props.theme.colorGrey2};
      border-radius: 0.5rem;
    }
  }

  .submit-btn button {
    transition: all 0.35s ease-in-out;

    @media screen and (max-width: 500px) {
      font-size: 0.9rem !important;
      padding: 0.6rem 1rem !important;

      i {
        font-size: 1.2rem !important;
        margin-right: 0.5rem !important;
      }
    }

    i {
      color: ${(props) => props.theme.colorGrey0};
    }

    &:hover {
      background: ${(props) => props.theme.colorPrimaryGreen} !important;
      color: ${(props) => props.theme.colorWhite} !important;
    }
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    label {
      flex: 1;
    }

    input {
      width: initial;
    }
  }
`;
