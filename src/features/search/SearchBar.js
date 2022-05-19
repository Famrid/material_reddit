import React from "react";
import { useState } from "react";
import { TextField } from '@mui/material';
import { useDispatch } from "react-redux/es/exports";
import { setSearch } from "./searchSlice";
import { useFetchPostsQuery } from "../posts/postsSlice";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar () {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const { data } = useFetchPostsQuery(searchTerm);

    const handlekeyPress = async (e) => {
        if(e.key === 'Enter') {
            console.log(searchTerm);
            dispatch(setSearch(searchTerm));
            console.log(await (await fetch('https://www.reddit.com/search/.json?q=cat&limit=10&type=link&sort=top')).json())
        }
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        
    }

    return(
        <TextField
            sx={{
                backgroundColor: 'primary.light',
                width: '100%'
            }}
            id="search-bar"
            InputProps= {{
                startAdornment: <SearchIcon />
            }}
            value={searchTerm}
            onChange={handleChange}
            onKeyUp={handlekeyPress}
        />
    )
}

export default SearchBar;