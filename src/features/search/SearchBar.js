import React from "react";
import { useState } from "react";
import { TextField } from '@mui/material';
import { useDispatch } from "react-redux/es/exports";
import { setSearch } from "./searchSlice";
import { useNavigate } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';

function SearchBar () {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handlekeyPress = async (e) => {
        if(e.key === 'Enter') {
            console.log(searchTerm);
            dispatch(setSearch(searchTerm));
            navigate(`/search/${searchTerm}`);
        }
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        
    }

    return(
        <TextField
            id="search-bar"
            type="search"
            label="Search Field"
            variant="filled"
            color="secondary"
            InputProps= {{
                endAdornment: <SearchIcon />
            }}
            sx={{
                '&:focus': {
                    backgroundColor: 'primary.light',
                    width: '100%'
                },
                '&:hover': {
                    backgroundColor: 'primary.light',
                    width: '75%'
                }
            }}
            value={searchTerm}
            onChange={handleChange}
            onKeyUp={handlekeyPress}
        />
    )
}

export default SearchBar;