import { Routes, Route } from "react-router-dom";
import { Create } from "../pages/Create";

import { Home } from "../pages/Home";
import { Preview } from "../pages/Preview";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview" element={<Preview/>} />
      <Route path="/create" element={<Create/>} />
    </Routes>
  )
}