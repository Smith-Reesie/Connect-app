import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Input from "../Landing/Input";
import styled from "styled-components";

function Search({search, setSearch}) {
  return <div>
    <SearchInput 
    onChange={(e) => setSearch(e.target.value)} 
    value={search} 
    placeholder="Search Friends ..."></SearchInput>
  </div>;
}

export default Search;

const SearchInput = styled.input`
  background: rgba(255, 255, 255, 0.70);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 1rem;
  width: 90%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  margin: 10px;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: black;
    font-weight: 100;
    font-size: 1rem;
  }
`;