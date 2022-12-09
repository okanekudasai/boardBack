package com.app.board;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class BoardController {
	@Autowired
	BoardMapper mapper;
	
	@GetMapping("/getList")
	public List<BoardDto> getList() {
		return mapper.getList();
	}
	
	@GetMapping("/getArticle/{num}")
	public BoardDto getArticle(@PathVariable int num) {
		return mapper.getArticle(num);
	}
	
	@PostMapping("/edit")
	public void edit(@RequestBody BoardDto dto) {
		mapper.edit(dto);
	}
	
	@GetMapping("/del/{num}")
	public void del(@PathVariable int num) {
		mapper.del(num);
	}
	
	@PostMapping("/write")
	public void write(@RequestBody HashMap<String, String> map) {
		mapper.write(map);
	}
}
