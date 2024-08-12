import React from "react";
import Menu from "./components/Menu/index"

export default function App(){
    return (
        <>
        <Menu>
            <Menu.Button arrow={"down"}>
                Menu
            </Menu.Button>
            <Menu.Dropdown display={"down"}>
                <Menu.Item>One</Menu.Item>
                <Menu>
                    <Menu.Button arrow={"right"}>
                        Two
                    </Menu.Button>
                    <Menu.Dropdown display={"right"}>
                        <Menu>
                            <Menu.Button arrow={"right"}>
                                Two A
                            </Menu.Button>
                            <Menu.Dropdown display={"right"}>
                                <Menu.Item>Two A1</Menu.Item>
                                <Menu.Item>Two A2</Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                        <Menu.Item>Two B</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
                <Menu.Item>Three</Menu.Item>
                <Menu>
                    <Menu.Button arrow={"right"}>
                        Four
                    </Menu.Button>
                    <Menu.Dropdown display={"right"}>
                        <Menu.Item>Four A</Menu.Item>
                        <Menu.Item>Four B</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Menu.Dropdown>
        </Menu>
        
        </>
    )
}