import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
    children: React.ReactChild;
    className?: string;
    onClick?: () => void;
}

export function Button(props: ButtonProps) {
    return <button {...props} />
}

type IconButtonProps = {
    icon: IconDefinition;
    className?: string;
    onClick?: () => void;
}

export function IconButton({ icon, className, onClick }: IconButtonProps) {
    return (
        <Button className={className} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </Button>
    );
}