import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Cookies from "js-cookie";
export const NewYear = () => {
  const [isOpen, setisOpen] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const cookieValue = Cookies.get("new_year_dialogue");
    if (cookieValue === "true") {
      setisOpen(false);
    } else {
      setisOpen(true);
    }
  }, []);
  const onClick = () => {
    Cookies.set("new_year_dialogue", "true");
    setisOpen(false);
  };
  if (!isOpen) return null;
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "10",
      }}
    >
      <Confetti width={width} height={height} />
      <Stack
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: "12",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            width: "700px",
            height: "500px",
            borderRadius: "12px",
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              fontSize: "64px",
              textAlign: "center",
              marginTop: "30px",
              fontWeight: "600",
            }}
          >
            Happy New Year !
          </Stack>
          <Stack
            component={"img"}
            src="./images/new_year_img.png"
            sx={{
              width: "400px",
              height: "400px",
              position: "absolute",
              top: "50px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <Stack
            sx={{
              width: "100%",
              fontSize: "36px",
              textAlign: "center",
              marginTop: "270px",
              fontWeight: "700",
            }}
          >
            Szczęśliwego nowego roku!
          </Stack>
          <Stack
            sx={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Stack
              sx={{
                width: "120px",
                height: "36px",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0a0a8f",
                borderRadius: "8px",
                marginTop: "16px",
                color: "#fff",
                fontWeight: "500",
                ":hover": {
                  opacity: "0.8",
                },
                cursor: "pointer",
              }}
              onClick={onClick}
            >
              Close
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
