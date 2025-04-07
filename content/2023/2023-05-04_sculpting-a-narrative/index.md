---
title: Sculpting a Narrative
date: "2023-05-04"
description: Intuitively editing generated texts
tags: ['itp', 'rwet', 'blog']
thumbnail:
tech: ['python', 'computational poetics']
---
> Created for Reading and Writing Electronic Text, Allison Parrish  || 
> [Github Repository](https://github.com/leils/itp_spr_2023/blob/main/rwet/HW%2006.ipynb)
My previous experiments have focused on using the programmatic nature of electronic text to lean into themes of memory loss. 

For this iteration, I'm looking at how I might sift a narrative out of a set of generated texts, each getting more and more randomized/unlikely. My idea is to find a narrative in the area of escape, playing into the themes within Peter Pan of escapism, exploration, and drama. After my experiments the other week, I decided that I wanted to take a heavier hand at editing the output text, with the idea of "sculpting" it.  

---

## Process 
### Generating 
Working off [my experiments with predictive models](https://github.com/leils/itp_spr_2023/blob/main/rwet/HW%2005.ipynb), I started with the DistilGPT2 model, which I then fine tuned with the entire text of Peter Pan, downloaded from Project Gutenberg. 

The prompt I used this time was `I am running away. I am running away, and`. I wanted to use a prompt that would mirror the escapism theme, while the present tense might lend itself to the idea of the text telling us a story. 

I used this prompt and  generator to create samples, each with an increasing temperature and and top_k. The temperatures and top-k I used are: 

```
(temperature, top_k)
(1.0, default), (2.0, default), (2.0, 100), (2.0, 500)
```

For each of these pairs, I generated 5 pieces of text with a maximum of 50 characters each, and added randomized formatting to them. 

### Editing 
I took each of these sets of text and edited each individual string based on my intuition. 
For example, this generated string: 
```
I am running away. I am running away, and ________For you boys they            tell Wendy.The door is blown by day.Then 
 their mouth must 
 have drifted off:In 

 this they will 
 keep growing till Peter was as redinned withf
```

was edited into this: 

```
I am running away. I am running away, and 

then 
 their mouth must 
 have drifted off: 				In  this they will 
 keep growing 
```

Here's a quick video of the editing process for (1.0, default). 

https://www.youtube.com/watch?v=sQkJE6KKBDE

Then, for each temp-topk pair, I created a combined text from the 5 strings. For example, the strings created for (2.0, 100): 
```

I am running away. I am running away, and 

then 
 their mouth must 
 have drifted off: 				In  this they will 
 keep growing 


 -------------------------------------

I am running away. I am running away, and tickling in amazement, his mouth open saying            so slowly! That every small animal in his little short 
 space was once in the world hewaswatching. 


 -------------------------------------

I am running 

 away. I 
            am running away, and ................................ the moment he arrived on that trail; which in one short moment is that time on his clock  
 
 the way was found just before. To this time at last.


 -------------------------------------

I am 

 running away. I am running away, and ************* 
 I charmed 

 most 

 nights while in the wilderness until            she found the strange spot that shewed round him.


 -------------------------------------

I am running away. I am running 
 away, and ____had she been frightened now? Oh.”Oh dear, he            

 could always think 
 forthought for which She 

 passed.But there were other visitors there. 
```

became this: 

```
I am running away. I am running away, and 
then their mouth must 
have drifted off: tickling in amazement, his mouth open saying            
								so slowly
 the moment he arrived on that trail; 

in one short moment
had she been frightened now? Oh.
	”Oh dear”, he            
		 could always think

But there were other visitors there.
```

---
## Final Results
The outcome is below: 

```
I am running away. I am 
 running away, 
 and !!!  I am still a long time away. 

I am not the only one who is looking for me. 

                   He cried and asked “Why?”“What did you do?”

and “Oh my, my sweet  bird.” but to say it is a lie.

“Now,” I            said, “I can save my life,  
 by going.”
```

```
I am 
 running away. 
 I am running away,  
					He knows of the boy. 

“You can find          all here 
	 by walking“

So on his 
 way into an ambush...not just for his 
 escape- but now more.quite close at arm in arm but a little bird 
 		by arm by foot in foot 
						on fire. 
```

```
I am running away. I am running away, and 
then their mouth must 
have drifted off: tickling in amazement, his mouth open saying            
								so slowly
 the moment he arrived on that trail; 

in one short moment
had she been frightened now? Oh.
	”Oh dear”, he            
		 could always think

But there were other visitors there.
```

```
I am running away. I am 
 running away, and ~~ o of, 

first for whereletfor to kiss
now --suddenly and they shall pass by under his power
baring him;gone

upon her leaves besidegably my side; what remain amoved this parting of story at its length

but afterwards ?             all feeling grief slowlyonme

broke easily 
 		quiet 
```

### Next Steps and Learnings 
Intervening on the texts added a much more satisfying outcome. In the process of editing, I channeled something like sculpting, or automatic writing. While I did not create the narratives above from scratch, I did have a hand at pulling it from what was generated. 

I don't know that I have next steps for this particular project, other than to take the texts created and print them in a zine or something. Overall I would like to iterate on this process and try this kind of editing again, on texts that are trained on corpuses closer to home (such as the text I've gathered as part of my thesis). 