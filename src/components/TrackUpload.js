import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import TrackInfo from "./TrackInfo";
import TrackDropzone from "./TrackDropzone";

const Upload = () => {
  const { tracks, loading } = useSelector((state) => state.trackUpload);

  return (
    <Layout>
      <h1 className="text-center font-weight-bold">Upload</h1>
      <br />
      {loading && "Uploading..."}
      {tracks && !tracks.length && !loading ? (
        <TrackDropzone></TrackDropzone>
      ) : (
        ""
      )}
      {tracks && tracks.length ? <TrackInfo></TrackInfo> : ""}
    </Layout>
  );
};

export default Upload;
