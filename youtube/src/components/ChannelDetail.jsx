import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromApi } from "../utils/fetchFromApi";
import { ChannelCard, Videos } from "./index";

const ChannelDetail = () => {
  const { id } = useParams();
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  console.log(ChannelDetail);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchFromApi(`search?channelId=${id}part=snippet&id${id}&order=data`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);

  return (
    <Box
      sx={{
        minHeight: "90vh",
      }}
    >
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          ChannelDetail={ChannelDetail}
          marginTop="-93px"
        ></ChannelCard>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}></Box>
        <Videos videos={videos}></Videos>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
