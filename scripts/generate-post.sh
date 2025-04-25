#!/bin/sh

#define parameters which are passed in.
TITLE=$1
DESCRIPTION=$2
DATE=$3 

# define variables
if [ -z $DATE ]
then 
    d=${3:-`date +%Y-%m-%d`}
else 
    d=$DATE
fi

y=`echo $d | cut -c1-4`
CLEANED_TITLE=${TITLE// /-}
PARENT_DIRNAME="content/${y}"
DIRNAME="${PARENT_DIRNAME}/${d}_${CLEANED_TITLE}"
FILENAME="${DIRNAME}/index.md"

if [ -d $PARENT_DIRNAME ]
then
    echo "Parent directory $PARENT_DIRNAME exists"
else
    echo "Creating directory $PARENT_DIRNAME"
    mkdir $PARENT_DIRNAME
fi

echo "generating directory: $DIRNAME"
mkdir $DIRNAME

echo "creating $FILENAME"
touch $FILENAME

#define the template.
cat << EOF > $FILENAME
---
title: $TITLE
date: "$d"
description: $DESCRIPTION
tags: []
thumbnail:
tech: []
---
placeholder text
EOF
