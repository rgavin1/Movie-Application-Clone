import { Link } from "react-router-dom";
import { Grid, Typography, Skeleton } from "@mui/material";
import { Program } from "../../../utils/types";

import Image from "./Image";

const SkeletonText = () => {
  return (
    <>
      <Skeleton
        sx={{
          backgroundColor: "#3a3a3a",
          fontSize: "1rem",
          marginTop: "15px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        width="80%"
        animation="wave"
        variant="text"
      />
      <Skeleton
        sx={{
          backgroundColor: "#3a3a3a",
          fontSize: "1rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        width="50%"
        animation="wave"
        variant="text"
      />
    </>
  );
};

const Results: React.FC<{ list: Program[]; loading: boolean }> = ({
  list,
  loading,
}) => {
  return (
    <Grid container spacing={2} xs={12}>
      {list.map((item: Program, id: number) => {
        return (
          <Grid key={id} item xs={3}>
            <Link to={`${item.media_type === "tv" ? "show" : item.media_type}s/${item.id}/details`}
              style={{ textDecoration: "none" }}
            >
              <Image item={item} loading={loading} />
              {loading ? (
                <SkeletonText />
              ) : (
                <Typography
                  p={2}
                  variant="subtitle1"
                  textAlign="center"
                  component="div"
                  color="white"
                >
                  {item.title ? item.title : item.name}
                </Typography>
              )}
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Results;
