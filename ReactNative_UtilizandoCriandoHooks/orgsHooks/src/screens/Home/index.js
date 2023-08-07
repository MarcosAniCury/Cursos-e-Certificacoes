import React from "react";
import Growers from "./components/Growers";
import Header from "./components/Header";

export default function Home() {
    return <Growers header={Header} />
}