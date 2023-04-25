import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import { Button } from "@mui/material";

import { grassguru, grassguru4, gglogo, logo, yariga } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={gglogo} alt="Yariga" width="190px" />
                ) : (
                    <img src={grassguru4} alt="Refine" width="190px" />
                )}
            </Link>
        </Button>
    );
};