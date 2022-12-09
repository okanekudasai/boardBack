package com.app.board;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BoardMapper {
	List<BoardDto> getList();

	BoardDto getArticle(int num);

	void edit(BoardDto dto);

	void del(int num);

	void write(HashMap<String, String> map);
}
