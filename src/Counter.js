import React from 'react'
import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Badge from '@mui/material/Badge';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

export default function Counter() {
    const [like, setlike] = useState(0);
    const [dislike, setdislike] = useState(0);
    return (

        <div className='like-button'>
            <IconButton aria-label='like' color='primary' fontSize='small' onClick={() => setlike(like + 1)}>
                <Badge badgeContent={like} color="primary" fontSize='small' anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }} size="small">
                    <ThumbUpIcon fontSize='medium' />
                </Badge>
            </IconButton>
            <IconButton aria-label='like' color='primary' fontSize='small' onClick={() => setdislike(dislike + 1)}>
                <Badge badgeContent={dislike} color="primary" anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }} size="small">
                    <ThumbDownIcon fontSize='medium' />
                </Badge>
            </IconButton>
        </div>
    )
}
