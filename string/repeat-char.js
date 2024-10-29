function maxRepeating(str)
    {
        let len = str.length;
        let count = 0;
        let res = str[0];
        for (let i=0; i<len; i++)
        {
            let cur_count = 1;
            for (let j=i+1; j<len; j++)
            {
                if (str[i] != str[j])
                    break;
                cur_count++;
            }
            if (cur_count > count)
            {
                count = cur_count;
                res = str[i];
            }
        }
        return res;
    }

    let str = "Hello World";
    console.log(maxRepeating(str));
     