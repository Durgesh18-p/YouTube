import SearchIcon from "@mui/icons-material/Search";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Input } from "@mui/material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        paddingLeft: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <Input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
