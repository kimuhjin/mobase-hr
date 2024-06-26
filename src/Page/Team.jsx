import { Button, MenuItem, Select, Stack, Typography } from "@mui/material";

import { BoardsContainer } from "../Composition/Board/BoardsContainer";
import { useState } from "react";
import { auth } from "../Util/auth";
import { useNavigate } from "react-router-dom";
import { BsClipboardData } from "react-icons/bs";
import { BOARD_TEAM } from "../Constant/route";

export const GROUP_LIST = [
  { label: "KS", id: "1ks_4mf" },
  { label: "MF", id: "ofd" },
  { label: "RC", id: "5sr" },
  { label: "CL", id: "3cl" },
  { label: "REN", id: "ren" },
  { label: "smt  (SMT)", id: "smt" },
];
export const Team = () => {
  const [selectedBoardId, setSelectedBoardId] = useState("1ks_4mf");
  const isAdmin = auth.role === "admin";
  const navigate = useNavigate();
  console.log(auth.role);
  return (
    <Stack sx={{ width: "100%", padding: "20px", overflowY: "auto" }}>
      <Stack
        sx={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}
        >
          Team
        </Typography>
        <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#000",
              ":hover": {
                backgroundColor: "#2f2f2f",
              },
            }}
            onClick={() => {
              navigate(
                `${BOARD_TEAM}/${isAdmin ? selectedBoardId : auth.role}`
              );
            }}
          >
            <BsClipboardData size={"16px"} color="#fff" />
            <Stack sx={{ marginLeft: "4px" }}>Board</Stack>
          </Button>
          {isAdmin && (
            <Select
              sx={{ width: "300px", height: "36px", marginLeft: "8px" }}
              value={selectedBoardId}
              onChange={(e) => {
                setSelectedBoardId(e.target.value);
              }}
            >
              <MenuItem value="1ks_4mf">{`KS`}</MenuItem>
              <MenuItem value="ofd">{`MF`}</MenuItem>
              <MenuItem value="5sr">{`RC`}</MenuItem>
              <MenuItem value="3cl">{`CL`}</MenuItem>
              <MenuItem value="ren">{`REN`}</MenuItem>
              <MenuItem value="smt">{`smt  (SMT)`}</MenuItem>
            </Select>
          )}
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "100%",
          height: "calc(100% - 0px)",
          overflowY: "auto",
        }}
      >
        {isAdmin ? (
          <Stack sx={{ width: "100%" }}>
            <BoardsContainer id={selectedBoardId} />
          </Stack>
        ) : (
          <Stack sx={{ width: "100%" }}>
            <BoardsContainer id={auth.role} />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
